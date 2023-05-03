const Navbar = () => {
    return ( 

        <div className="navbar">
        <h1>The dojo blog</h1>
        <div className="links">
            <a href="/.">home</a>
            <a href="/create" style={{
                colour:'white',
                backgroundColor: "#f1356d",
                borderRadius:5

            }}>New blog </a>
        </div>



        </div>
     );
}
 
export default Navbar;