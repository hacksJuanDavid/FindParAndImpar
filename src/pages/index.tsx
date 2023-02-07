import Image from "next/image";
import { useState } from "react";

export default function Home() {
  //create states
  const [numbers, setNumbers] = useState<number[]>([]);
  const [impars, setImpars] = useState<number[]>([]);
  const [par, setPar] = useState<number[]>([]);

  //HandleChange input
  const HandleChange = (e: any) => {
    //code ejecuted when input change value to time 1000ms
    setTimeout(() => {
      //calculate porcentage rewars
      CalculatePrimeAndPar(
        //parse data to number
        parseInt(e.target.value)
      );
      //set data to state
      setNumbers(e.target.value);
    }, 1000);
  };

  //calculate prime and par
  const CalculatePrimeAndPar = (number: number) => {
    //if number in range 20 to 35 calculate prime and par
    if (number >= 20 && number <= 35) {
      //create array
      let array: number[] = [];

      //create array with numbers
      for (let i = 0; i <= number; i++) {
        array.push(i);
      }
      //filter array with impars numbers
      let imparsNumbers = array.filter((number) => number % 2 !== 0);

      //filter array with par numbers
      const parNumbers = array.filter((number) => {
        return number % 2 === 0;
      });

      //set data to state
      setImpars(imparsNumbers);
      setPar(parNumbers);

      //print console data
      console.log("array", array);
      console.log("imparsNumbers", imparsNumbers);
      console.log("parNumbers", parNumbers);
    } else {
      //set data to state
      setImpars([]);
      setPar([]);
    }
  };

  return (
    <>
      <div className="flex justify-center m-8 p-8 rounded-full w-auto bg-zinc-800">
        <div className="card w-full glass">
          <figure className="m-4 p-4">
            <Image
              src="/numbers.png"
              alt="car!"
              width={400}
              height={100}
              priority={true}
              className="border-2 border-primary rounded-lg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">Find numbers</h2>
            <p className="card-text text-center">
              Find the impar to par in numbers
            </p>

            <h6 className="card-title justify-center text-sm">
              Input number :
            </h6>
            <h6 className="card-title justify-center text-sm">
              ¡Input range to 20 to 35!
            </h6>

            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Type number"
                className="input input-bordered w-full max-w-xs m-2"
                onChange={HandleChange}
              />
            </div>

            <div className="stats shadow">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Total Numbers Impars</div>
                <div className="stat-value text-primary">
                  {
                    //print data state
                    impars.toString().replace(/,/g, " ")
                  }
                </div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Total Numbers Pars</div>
                <div className="stat-value text-secondary">
                  {
                    //print data state
                    par.toString().replace(/,/g, " ")
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
