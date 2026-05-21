import React, { useState } from 'react'
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
import TopicForm from '../components/TopicForm';
import Sidebar from '../components/Sidebar';
import FinalResult from '../components/FinalResult';
function Notes() {
    const navigate = useNavigate();
    const userData = useSelector((state) => state.user.userData)
    const credits = userData?.credits ?? 0
    const[loading,setLoading]=useState(false)
    const[result,setResult]=useState(null)
    const[error,setError]=useState("")
    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-6 py-8'>
            <motion.header
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='mb-10 
        rounded-2xl bg-black/80 backdrop-blur-xl
        border border-white/10
        px-8 py-6
        shadow-[0_20px_45px_rgba(0,0,0,0.6)] items-start
        flex md:items-center justify-between gap-4 flex-col md:flex-row'
            >
                <div onClick={() => navigate("/")} className='cursor-pointer'>
                    <h1 className='text-2xl font-bold bg-gradient-to-r from-white
        via-gray-300 to-white
        bg-clip-text text-transparent'>
                        ExamNotesAi
                    </h1>

                    <p className='text-sm text-gray-300 mt-1'>
                        AI-powered exam oriented notes and revision
                    </p>
                </div>
                <div className='flex items-center gap-4 flex-wrap'>
                    <button className='flex items-center gap-2 
                    px-4 py-2 rounded-full bg-white/10 border border-white/20
                    text-white text-sm' onClick={() => navigate("/pricing")}>
                        <span className='text-xl'>💎</span>
                        <span>{credits}</span>
                        <motion.span whileHover={{ scale: 1.07 }}
                            whileTap={{ scale: 0.97 }}>
                            ➕
                        </motion.span>

                    </button>
                    <button onClick={() => navigate("/history")} className='px-4 py-3 rounded-full text-sm font-medium
                    bg-white/10 border border-white/20
                    text-white hover:bg-white/20
                    transition flex items-center gap-2'
                    >
                        📚 Your Notes
                    </button>

                </div>

            </motion.header>
           < motion.div 
           className='mb-12'>
           <TopicForm loading={loading} setResult={setResult} setLoading={setLoading} setError=
           {setError}/>
           </motion.div>

           {loading && (
            <motion.div
            animate={{opacity:[0.4,1,0.4]}}
            transition={{repeat:Infinity,duration:1.2}}
            className='text-center text-black font-medium mb-6'
            >
             Generatind Exam Focused Notes
            </motion.div>
           )

           }
           {error && (
            <div className='mb-6 text-center text-red-600 font-medium'>
               {error}
          </div>
           )}

      {!result &&  <motion.div className='
        h-64
        rounded-2xl
        flex flex-col items-center justify-center
        bg-white/60 backdrop-blur-lg
        border border-dashed border-gray-300
        text-gray-500
        shadow-inner'>
            <span className='text-4xl'>📘</span>
            <p className='text-sm'>
                Generate notes will appear here
            </p>

        </motion.div>}
    {result &&
    <motion.div 
    initial={{opacity:0,y:30}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.4}}
    className='flex flex-col lg:grid 
    lg:grid-cols-4'>
        <div className='lg:col-span-1'>
            <Sidebar result={result.data} />
        </div>
        <div className='lg:col-span-3
        rounded-2xl
        bg-white
        shadow-[0_15px_40px_rgba(0,0,0,0.15)]
        p-6'>
            <FinalResult result={result.data}/>

        </div>
        
        </motion.div>}
            
        </div>
    )
}

export default Notes
