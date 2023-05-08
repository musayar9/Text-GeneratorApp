import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchParagraph = createAsyncThunk('paragraph/getParagraphs', async ({paras, modal}) => {
    const res = await axios(`https://baconipsum.com/api/?type=all-meat&paras=${paras}&format=${modal}`)
    return res.data;
})


const generatorSlice = createSlice({
    name: "paragraphs",
    initialState: {
        paragraph: [],
        paras: 1,
        modal: "text",
        status: "idle"
    },

    reducers: {
        updateParas: (state, action) => {
            state.paras = action.payload
        },

        updateModal: (state, action) => {
            state.modal = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchParagraph.pending, (state, action) => {
            state.status = "loading"
        })


        builder.addCase(fetchParagraph.fulfilled, (state, action) => {
            state.paragraph = action.payload
            state.status = "success"
        })

        builder.addCase(fetchParagraph.rejected, (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        })
    }
})

export const { updateParas, updateModal } = generatorSlice.actions
export default generatorSlice.reducer