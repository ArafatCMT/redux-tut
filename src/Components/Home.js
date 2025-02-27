import shoe from '../shoe.jpg'
import cart from '../cart.jpg'
function Home() {
    return (
        <div>
            <div>
                <img src={cart} alt="" style={{width:'70px', height:'70px', position:'absolute', right:'1%' }}/>
            </div>
            <h1>Home Component</h1>
            <div className="mx-auto w-25 mt-4">
                <div className="card border" style={{width: '15rem', height: '24rem'}}>
                        <img src={shoe} className="card-img-top " alt="..."/>
                        <div className="card-body">
                            <h5>Nick Shoe</h5>
                            <p className="card-text text-danger">$ 1550.00</p>
                            <p>
                                <button className='btn btn-primary'>Add To Cart</button>
                            </p>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Home;