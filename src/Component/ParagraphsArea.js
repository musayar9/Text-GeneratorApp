import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchParagraph } from '../redux/generatorSlice'
import Loading from './Loading'
import Error from './Error'

function ParagraphsArea() {
  const paras = useSelector((state) => state.paragraphs.paras)
  const modal = useSelector((state) => state.paragraphs.modal)
  const paragraph = useSelector((state) => state.paragraphs.paragraph)
  const status = useSelector((state) => state.paragraphs.status)
  const error = useSelector((state) => state.paragraphs.error)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchParagraph({ paras, modal }))
  }, [dispatch, paras, modal])

  if (status === "failed") {
    return <div><Error message={error} /></div>
  }

  return (
    <>
      {status === "loading" && <Loading />}
      <div className='w-full  '>
        <div className='container w-[300px] md:w-[700px] lg:w-[900px] px-10 py-10 flex items-center justify-center  rounded-lg bg-[#303030] text-gray-50'>
          {paragraph}

        </div>
      </div>
    </>


  )
}

export default ParagraphsArea
