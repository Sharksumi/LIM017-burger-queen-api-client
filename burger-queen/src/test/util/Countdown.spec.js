import { MyStopwatch } from '../../util/Countdown.js';
import '@testing-library/jest-dom';
import Countdown from '../../util/Countdown';
import React, { createElement } from 'react';
import { render } from '@testing-library/react';

describe("MyStopwatch", () => {
        const startTime = 2000

        const  endTime = 5000
        //const duration = 18
         const duration = Date.parse(endTime) - Date.parse(startTime);
        //const result = ;
         const result = new Date(duration).toISOString().slice(11, 19);
        // console.log(result)
    it("should return total time of preparing plate", () => {
        // const div = document.createElement('div')
        const timer = render(
            <div data-testid="resultCount">
                <p>Terminado en : </p>
                <p> 00:00:00 </p>
                </div>)

        expect(MyStopwatch({startTime, endTime})).toBe(result)
    })
    it(" it should return null when there is no startTime or endTime", () => {
        
        const  endTimeNull = null;
        expect(MyStopwatch(0,endTimeNull)).toBe(null)
         
    })


})