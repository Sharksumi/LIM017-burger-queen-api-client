import { MyStopwatch } from '../../util/Countdown.js';
import '@testing-library/jest-dom';
import Countdown from '../../util/Countdown';
import React, { createElement } from 'react';
import { render, screen } from '@testing-library/react';

describe("MyStopwatch", () => {
    const startTime = '2022-06-21 17:52:10'
    const endTime = '2022-06-21 17:58:10'
    const duration = Date.parse(endTime) - Date.parse(startTime);
    // console.log(duration)
    const result = new Date(duration).toISOString().slice(11, 19);

    // console.log(result)
    it("should return total time of preparing plate", () => {
        const watchTimer = MyStopwatch ({ startTime, endTime });

        render(watchTimer);
       
        expect( screen.getByTestId('resultCount').textContent).toContain(result)
    })
    it(" it should return null when there is no startTime or endTime", () => {

        const endTimeNull = null;
        expect(MyStopwatch(0, endTimeNull)).toBe(null)

    })
})
