"use client"
import React, { useEffect} from 'react';
interface animationProps{
rowNumber:number,
}
const characters = ':/::::// //*/**::/:: ::// //*/**::/: :: :// //*/**::/::::/ // /*/**::/::::////*/**::/::: :// //*/**::/::::////*/**::/::::// // */**: :/:: ::// //* /**::/ :: : :/ / //*/**::/::::////*/**::/: :: : /// /* /**:: /:: ::////*/* *::/:: ::// //*/**::/: : ::// //*/**:';
function displacement(n:number,colNumber:number){
    return n+Math.sin(colNumber*180/Math.PI)
}
function checkExistence(colNumber:number){
    if(colNumber>displacement(10,colNumber) && colNumber<displacement(25,colNumber)) return 1
    if(colNumber>displacement(35,colNumber) && colNumber<displacement(55,colNumber)) return 1
    if(colNumber>displacement(75,colNumber) && colNumber<displacement(90,colNumber)) return 1
    return  Math.sin(colNumber*Math.random()*180/Math.PI);
}
function generateString(numChars: number): string {
    let result = '';
    for (let i = 0; i < numChars; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;}

const MyComponent:React.FunctionComponent<animationProps> = ({rowNumber}) => {
  const [generatedString, setGeneratedString] = React.useState('');
  useEffect(() => {
    const interval:NodeJS.Timeout = setInterval(() => {
      const newString = generateString(90); 
      setGeneratedString(newString);
    }, 150);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className='text-white w-full flex justify-between '>
    {generatedString.split('').map((s:string,index:number)=>{
        // console.log(rowNumber*Math.random()/12)
        if(rowNumber<9){
            console.log(checkExistence(index))
            if(checkExistence(index)>0){
                if(Math.random()>0.85){
                   return (
                    <span className='text-[#0281F0]'>
                        {s}
                    </span>
                   )
                }
                return (
                    <span>
                                {` `}
                    </span>
                )
            }
        }
        
        return (
            <span className='opacity-[70%] text-[#0281F0]'>
                {s}
            </span>
        )
    })}
  </div>;
};

export default MyComponent;