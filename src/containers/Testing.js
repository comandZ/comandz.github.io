import React from 'react';

const Testing = () => {
    
    function execOnce (fn, context) {
        var result;
        return function(){
            console.log('Once Run');

            if(fn) {
                result = fn.apply(context || this, arguments);
                fn = null;
            }
            return result;
        };
    };

    
    function plusMinus() {
        const arr = [4,5,-7,-8,0,45,76,0];
        let total = arr.length;
        let positive = arr.filter(number => number > 0).length/total;
        let negative = arr.filter(number => number < 0).length/total;
        let zero = arr.filter(number => number === 0).length/total; 
                   
        console.log(positive.toFixed(6));
        console.log(negative.toFixed(6));
        console.log(zero.toFixed(6));

    }

    function minMaxSum() {
        const arr = [4,6,5,7,8, 3, 9];
        const sorted = arr.sort();
        const all = arr.length;
        const lastFour = all - 4;
        const first = sorted.slice(0, 4);
        const last = sorted.slice(lastFour, all);

        function sums(numbers) {
            let sum = 0;
            for (let i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }
            return sum;
        }
        
        console.log(sums(first)+' '+sums(last));
    }

    function timeConvert(s) {
        const timing = s.slice(-2);
        const clean = s.slice(0, -2);
        const split = clean.split(':');
        const hours = split[0];
        let adjusting = 12;
        let finalTime = '';
        let adjHr = '';

        if (timing === 'PM' && hours < adjusting) {
            adjHr = parseInt(hours) + parseInt(adjusting);
            split[0] = adjHr;
            finalTime = split.join(':');
        } else if (timing === 'AM' && hours == adjusting) {
            adjHr = parseInt(hours) - parseInt(adjusting);
            split[0] = 0 + adjHr;
            finalTime= '0' + split.join(':');
        } else {
            finalTime = split.join(':');
        }

        console.log(finalTime);
        return;

    }

    function fizzBuzz(n) {
        const arr = [];
        let i = '';

        for(i = 1; i <= n; i++) {
            arr.push(i);
        }

        for(i = 1; i <= arr.length; i++ ) {
            if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
                arr[i] = 'FizzBuzz';
            } else if (arr[i] % 5 === 0) {
                arr[i] = 'Buzz';
            } else if (arr[i] % 3 === 0) {
                arr[i] = 'Fizz';
            }
        }

        const string = arr.join('\n');

        console.log(string);
        
    }

    function es5Tut(stuff) {
        let x = 10;
        if (x == 10) {
            let x = 20;
            console.log(x);
        }
        console.log(x);
    }
    
    const funOnce = execOnce(fizzBuzz(15));

    funOnce();

    return(
        <div>
            <p>Check Console for Hidden Values</p>
        </div>
    )
}

export default Testing;