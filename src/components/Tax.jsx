import React, { useState, useEffect } from 'react'
import Dropdown from './Dropdown'

export default function Tax() {
    const [purchase, setPurchase] = useState(0);
    const [sale, setSale] = useState(0);
    const [exp, setExp] = useState(0);
    const [capitalGain, setCapitalGain] = useState(0);
    const [longterm, setLongterm] = useState(0);
    const [paytax, setPaytax] = useState(0);
    const [tick, setTick] = useState(false);
    const [tickone, setTickone] = useState(true);
    const [anincome, setAnincome] = useState(0);
    const [tax, setTax] = useState("0%");
    const [mytax, setMytax] = useState(0);
    const [mynet, setMynet] = useState(0);
  

  


   
    useEffect(() => {
        function taxchanges() {
            if (anincome === "1") {
                setTax("0%")
                setMytax(0)
            }
            else if (anincome === "18") {
                setTax("Nil + 19% of excess over $18,200")
                setMytax(19)
            } else if (anincome === "45") {
                setTax("$5,092 + 32.5% of excess over $45,000")
                setMytax(32.5)
            } else if (anincome === "120") {
                setTax("$29,467 + 37% of excess over $120,000")
                setMytax(37)
            } else if (anincome === "180") {
                setTax("$51,667 + 45% of excess over $180,000")
                setMytax(45)
            } else {
                setTax("0%")
                setMytax(0)
            }
        }
        taxchanges(anincome)
    }, [anincome])

    useEffect(() => {
        function calc() {
            let cap = sale - purchase - exp;
            setCapitalGain(cap);
            let lt = 0;
            if (cap >= 0) {
                lt = cap / 2;
                setLongterm(cap / 2);
            }
            let netGain = cap - lt;
            setMynet(netGain)

            let mtax = mytax
            let taxneed = (mtax * netGain) / 100;
            setPaytax(taxneed)
        }
        calc()
    }, [sale, exp, purchase, mytax])

    function handletick() {
        setTick(!tick);
        setTickone(!tickone);
    }

    function incomechanges(data) {
        setAnincome(data);
    }

    return (
        <div className='taxcard bg-white rounded-2xl p-5 flex flex-col justify-center items-center w-full max-w-4xl mx-auto'>
            <div className='undertax flex flex-col justify-evenly gap-10 w-full'>
                <h1 className='text-3xl font-bold text-center'>Free Crypto Tax Calculator Australia</h1>
                <div className='datatax flex flex-col gap-7'>
                    <div className='flex flex-col md:flex-row justify-between gap-4'>
                        <div className='flex flex-col md:flex-row items-center gap-4'>
                            <span>Financial year</span>
                            <select className='bg-white border border-gray-300 rounded-lg px-4 py-2 font-bold'>
                                <option>FY 2024-2025</option>
                            </select>
                        </div>
                        <Dropdown />
                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex flex-col w-full'>
                            <span>Enter purchase price of Crypto</span>
                            <div className='flex'>
                                <span className='w-1/5 bg-gray-200 rounded-l-lg flex items-center justify-center'>$</span>
                                <input type="number" className='w-4/5 bg-white border border-gray-300 rounded-r-lg p-2' value={purchase} onChange={(e) => setPurchase(e.target.value)} />
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <span>Enter sale price of Crypto</span>
                            <div className='flex'>
                                <span className='w-1/5 bg-gray-200 rounded-l-lg flex items-center justify-center'>$</span>
                                <input type="number" className='w-4/5 bg-white border border-gray-300 rounded-r-lg p-2' value={sale} onChange={(e) => setSale(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex flex-col w-full'>
                            <span>Enter your Expenses</span>
                            <div className='flex'>
                                <span className='w-1/5 bg-gray-200 rounded-l-lg flex items-center justify-center'>$</span>
                                <input type="number" className='w-4/5 bg-white border border-gray-300 rounded-r-lg p-2' value={exp} onChange={(e) => setExp(e.target.value)} />
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <span>Investment Type</span>
                            <div className='flex gap-4'>
                                <button onClick={handletick} className={`flex-1 p-2 rounded-lg ${!tick ? 'border-black' : 'border-primary bg-blue-200'}`}>Short Term</button>
                                <button onClick={handletick} className={`flex-1 p-2 rounded-lg ${!tickone ? 'border-black' : 'border-primary bg-blue-200'}`}>Long Term</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex flex-col w-full'>
                            <span>Select Your Annual Income</span>
                            <select className='p-2 bg-white border border-gray-300 rounded-lg' onChange={(e) => incomechanges(e.target.value)}>
                                <option value="1">$0 - $18,200</option>
                                <option value="18">$18,201 - $45,000</option>
                                <option value="45">$45,001 - $120,000</option>
                                <option value="120">$120,001 - $180,000</option>
                                <option value="180">$180,001+</option>
                            </select>
                        </div>
                        <div className='flex flex-col w-full'>
                            <span>Tax rate</span>
                            <div className='p-2 bg-white border border-gray-300 rounded-lg'>{tax}</div>
                        </div>
                    </div>
                    <div className={`flex flex-col md:flex-row gap-4 ${tick ? 'invisible' : 'visible'}`}>
                        <div className='flex flex-col w-full'>
                            <span>Capital gains amount</span>
                            <input type="text" className='p-2 bg-white border border-gray-300 rounded-lg' value={capitalGain} readOnly />
                        </div>
                        <div className='flex flex-col w-full'>
                            <span>Discount for long term gains</span>
                            <input type="text" className='p-2 bg-white border border-gray-300 rounded-lg' value={capitalGain >= 0 ? longterm : 0} readOnly />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <div className='flex flex-col w-full bg-green-200 rounded-lg p-4'>
                            <span>Net Capital gains tax amount</span>
                            <h1 className='text-green-900 font-bold'>${tick ? capitalGain : mynet}</h1>
                        </div>
                        <div className='flex flex-col w-full bg-blue-200 rounded-lg p-4'>
                            <span>The tax you need to pay*</span>
                            <h1 className='text-primary font-bold'>${tick ? (capitalGain * mytax) / 100 : capitalGain <= 0 ? 0 : paytax}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
