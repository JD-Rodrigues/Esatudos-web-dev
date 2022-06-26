import { Link, Outlet, useNavigate } from 'react-router-dom'

export function Cases() {
    const navigate = useNavigate()
    

    
    return (
        <>
            <h1 className="cases">Cases</h1>
            <Link to='sites'><p>Sites</p></Link>
            <Link to='web-systems'><p>Web systems</p></Link>
            <Link to='games'><p>Games</p></Link>
            <button onClick={()=>navigate('/cases/games')}>Go About us</button>
            <Outlet />
        </>        
    )
}