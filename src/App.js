function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className = "d-flex align-center">
          <img width = {40} height = {40} src="/img/logo.png" />
        <div>
          <h3 className="text-uppercase">Sneakers</h3>
          <p>Shop</p>
        </div>
      </div>
        <ul className = "d-flex">
          <li className = "mr-30">
            <img width = {18} height = {18} src="/img/cart.svg" />
            <span>1205</span>
          </li>
          <li>
            <img width = {18} height = {18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40"> All sneakers </h1>

        <div className="d-flex">

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
          <h5>Nike Blazer</h5>
          <div className="d-flex justify-between">
            <div className="d-flex flex-column align-center"> 
              <span>Money:</span>
              <b>12 999 rubles</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
          <h5>Nike Blazer</h5>
          <div className="d-flex justify-between">
            <div className="d-flex flex-column align-center"> 
              <span>Money:</span>
              <b>12 999 rubles</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
          <h5>Nike Blazer</h5>
          <div className="d-flex justify-between">
            <div className="d-flex flex-column align-center"> 
              <span>Money:</span>
              <b>12 999 rubles</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
          <h5>Nike Blazer</h5>
          <div className="d-flex justify-between">
            <div className="d-flex flex-column align-center"> 
              <span>Money:</span>
              <b>12 999 rubles</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>

        </div>

      </div>
    </div>
  );
}

export default App;
