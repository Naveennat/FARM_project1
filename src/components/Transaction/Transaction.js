import TableData from "./form";
import "./Transaction.css";


export default function Transaction() {
    return (
      <section className='contacts'>
  
      <div className='containers'>
        <form className='shadow '>      
          
          <div>
              <h3>Account number : ********2222</h3>
              <h3>Name : Saravanan</h3>
              <h3>Bank name : City Union Bank</h3>
              <h3>IFSC code : 22C33H343</h3>
              <h3>Card Type : Elite Card </h3>
              <h3>Account Balance : 8000 </h3>          
              </div>
          <div>
          <h2><TableData /></h2>
          </div>
          
          
        </form>
      </div>
    </section>
    
    );
  }


/*<>
    <div>
      <h3>Account number : ********2222</h3>
      <h3>Name : Saravanan</h3>
      <h3>Bank name : HDFC Bank</h3>
      <h3>IFSC code : 22C33H343</h3>
      <h3>Account Balance : 8000 </h3>
    </div>
    <h2><TableData /></h2>
  </> */  