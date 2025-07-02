import { Link, Navigate } from 'react-router-dom';
import { Button } from 'antd';
function Menu(){


    return (
        <>
        <h2>Menu</h2>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/privacy">Privacy</Link>
        </nav>
        <Button type="dashed" color="gold" variant="dashed" >CLick me</Button>
        </>
    )
}

export default Menu;