import bookImg from './assets/img1.jpg'

export function Book() {

  return (
    <div className="card" style={{ padding: "20px", margin: "10px", backgroundColor: "red", borderRadius: "5px", color: "#333", fontFamily: "Arial, sans-serif", textAlign: "center", width: "350px", height: "350px" }}>
      <img src={bookImg} width="200" height="200" alt="book Image" />
      <h3>Title:Physics</h3>
      <h4>Price: ₹341/-</h4>
      <button>Add to Cart</button>
    </div>
  )
}