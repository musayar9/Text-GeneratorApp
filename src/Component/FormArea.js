import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { updateModal, updateParas } from '../redux/generatorSlice'
function FormArea() {
  const dispatch = useDispatch()
  const paras = useSelector((state)=>state.paragraphs.paras)
  const modal = useSelector((state)=>state.paragraphs.modal)


  const handleChange =(e)=>{
    e.preventDefault();
    dispatch(updateParas(e.target.value))
  }

  const handleModal = (e)=>{
    e.preventDefault();
    dispatch(updateModal(e.target.value))
  }
  return (
    <div className='w-full mt-1'>
         <div className=' container max-w-5xl flex items-center justify-start pt-5 py-5 px-14 space-x-4'>
      <div className='flex flex-col items-start justify-start space-y-2'>
        <label htmlFor='paragraph' className='text-white font-semibold text-md md:text-lg pl-2 '> Paragraph</label>

        <input id="paragraph" type='number'  className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg 
        focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5 
' value={paras} onChange={handleChange}/>
      </div>

      <div className='flex flex-col items-start justify-start space-y-2'>
        <label htmlFor='paragraph' className='text-white font-semibold text-clip text-md md:text-lg pl-2'>İnclude Html</label> 
        <select value={modal} name="moda" id='modal' onChange={handleModal} className='bg-gray-100 border border-gray-300 
        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5 w-28 md:w-32' >
          <option className='' value="html">Yes</option>
          <option value="text">No</option>
        </select>

      </div>
     
    </div>
    </div>
 
  )
}

export default FormArea
