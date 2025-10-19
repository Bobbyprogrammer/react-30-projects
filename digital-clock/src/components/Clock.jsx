import { useEffect, useState } from "react"

const Clock = () => {
   const [time,setTime]=useState(new Date())
   useEffect(()=>{

      const timer=setInterval(() => {
         setTime(new Date())
      }, 1000);
      return ()=>clearInterval(timer);
   },[]);

   const formatDate=(num)=>(num<10?'0'+num:num)
  return (
    <div className="bg-white text-gray-800 p-10 rounded-2xl shadow-2xl text-center">
<h1 className="text-3xl font-bold mb-4">Digital Clock</h1>
<div className="text-6xl font-mono">
   {formatDate(time.getHours())} :{formatDate(time.getMinutes())} :{formatDate(time.getSeconds())}

</div>
<p className="text-lg mt-4 text-gray-500">

{
   time.toLocaleDateString('en-US',{
      weekday:'long',
      day:'numeric',
      month:'long',
      year:'numeric'
   })
}
</p>
    </div>
  )
}
export default Clock