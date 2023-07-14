import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-row items-center justify-center gap-8  m-auto w-1/2 p-2 bg-slate-800  rounded-xl">
      <div>
        <Link to="/">
          <img
            className=" w-22 h-20 p-3 rounded-2xl"
            src="https://media.istockphoto.com/id/1164871184/it/foto/la-stella-vuota-sul-marciapiede-della-hollywood-boulevard-walk-of-fames.jpg?s=612x612&w=0&k=20&c=wLkvi9MxVDdq-BOcY3_ppTlgztMkUUBxYew97SRddJI="
            alt="img"
          />
         
        </Link>
       
      </div>
      <div>
        <span className="text-white font-serif text-4xl font-extrabold">Hollywood Stars</span>
      </div>
      
      
      
      {/*<section className="flex gap-8 p-4">
       
      chiedere come implementare   <Link to="/char/">
          <span className="p-4 text-white  text-3xl">MoreInfo</span>
        </Link> 
      </section>*/}
    </header>
  );
}

export default Header;
