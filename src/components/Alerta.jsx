const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'from-[#F5C116] to-yellow-400 text-[#1B053B]' : 'from-[#4B1D89] to-[#1B053B] text-white'} bg-gradient-to-br text-center p-3 rounded-xl uppercase font-bold text-sm my-10 `}>
        {alerta.msg}
    </div>
  )
}

export default Alerta