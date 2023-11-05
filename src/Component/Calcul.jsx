import React,{ useState } from 'react'

function Calcul() {
    const [input,setInput] = useState('')
    const [result,setResult] = useState('0')
    const handleInput = (value) => {
        setInput(input + value)
    }
    const handleButtonClick = (value) =>{
        if(value === 'AC'){
            setResult('0')
            setInput('')
        }
        else if(value === 'c'){
            setInput(input.slice(0, -1))
        }
        else if(value === '='){
            try{
                const expResult = eval(input)
                setResult(expResult)
                setInput(expResult.toString())
            }
            catch(error){
                setResult("Error!!! invalid Expresseion")
                setInput('')
            }
        }

    }
    const handleSquareRoot = () => {
        try {
          const inputValue = parseFloat(input);
          if (!isNaN(inputValue)) {
            const result = Math.sqrt(inputValue);
            setInput(result.toString());
          } else {
            setInput('Invalid Input');
          }
        } catch (error) {
          setInput('Error');
        }
      };
      
  return (
    <>
            
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center bg-light w-100 '>
    <div style={{width:'400px'}} className=' bg-dark p-3 card rounded'>
       <div> <input className='w-100 p-3' type="text"   value={input} onChange={(e) => setInput(e.target.value)} /></div>
       <div className='d-flex justify-content-around  align-items-center mt-3 mb-2'>
       <button onClick={()=>handleButtonClick('AC')} className='card w-25 shadow p-3 mx-1'>AC</button>
        <button onClick={()=>handleInput('%')} className='card w-25 shadow p-3 mx-1  '>%</button>
        
        <button onClick={handleSquareRoot} className='card w-25 shadow p-3 mx-1'>  √</button>
        <button onClick={()=>handleButtonClick('c')} className='card w-25 shadow p-3 mx-1'><i class="fa-sharp fa-solid fa-delete-left"></i></button>
       </div>
       <div className='d-flex justify-content-around  align-items-center  mb-2'>
        <button onClick={()=>handleInput('7')} className='card w-25 shadow p-3 mx-1 '>7</button>
        <button onClick={()=>handleInput('8')} className='card w-25 shadow p-3 mx-1'>8</button>
        <button onClick={()=>handleInput('9')} className='card w-25 shadow p-3 mx-1'>9</button>
        <button onClick={()=>handleInput('/')} className='card w-25 shadow p-3 mx-1'>/</button>
       </div>
       <div className='d-flex justify-content-around  align-items-center  mb-2'>
        <button onClick={()=>handleInput('4')} className='card w-25 shadow p-3 mx-1 '>4</button>
        <button onClick={()=>handleInput('5')} className='card w-25 shadow p-3 mx-1'>5</button>
        <button onClick={()=>handleInput('6')} className='card w-25 shadow p-3 mx-1'>6</button>
        <button onClick={()=>handleInput('*')} className='card w-25 shadow p-3 mx-1'>X</button>
       </div>
       <div className='d-flex justify-content-around  align-items-center  mb-2'>
        <button onClick={()=>handleInput('1')} className='card w-25 shadow p-3 mx-1 '>1</button>
        <button onClick={()=>handleInput('2')} className='card w-25 shadow p-3 mx-1'>2</button>
        <button onClick={()=>handleInput('3')} className='card w-25 shadow p-3 mx-1'>3</button>
        <button onClick={()=>handleInput('-')} className='card w-25 shadow p-3 mx-1 fa-30px'>-</button>
       </div>
       <div className='d-flex justify-content-around  align-items-center  mb-2'>
        <button onClick={()=>handleInput('0')} className='card w-25 shadow p-3 mx-1 '>0</button>
        <button onClick={()=>handleInput('.')} className='card w-25 shadow p-3 mx-1 fa-20px'>.</button>
        <button onClick={()=>handleInput('+')} className='card w-25 shadow p-3 mx-1 fa-20px'>+</button>
        <button onClick={()=>handleButtonClick('=')} className='card w-25 shadow p-3 mx-1 fa-20px'>=</button>
       </div>
       
 
    </div>
    </div>
        </>
  )
}

export default Calcul