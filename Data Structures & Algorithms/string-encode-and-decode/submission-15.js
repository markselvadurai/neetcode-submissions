class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res  = '';
        let delimiter = '#';
        for (let i of strs) {
            res += i.length+delimiter+i;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let res = [];
        while (i < str.length) {
            let j = i;
            while( str[j] != '#') {
                j += 1
            }
            let length = Number(str.slice(i,j));
            // console.log(length,i,j);
            // console.log(str.slice(j+1,j+length+1));
            i = j+length+1;
            res.push(str.slice(j+1,j+length+1))
        }
        return res;
    }
}
