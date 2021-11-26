import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import CryptoJS from "crypto-js"
// var AES = require("crypto-js/aes");
import { AES } from 'crypto-js';
export default function Bcrpt() {
    // const [Gdata, setGdata] = useState([]);
    var Gdata={}
    console.log(Gdata.data)
    async function aceesurl() {

        const mkey = 'REALCODERZ123456';
        function encrypt(data) {
            const iv = CryptoJS.enc.Utf8.parse(mkey);
            const key = CryptoJS.enc.Utf8.parse(mkey);
            var result = CryptoJS.AES.encrypt(JSON.stringify(data), key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }).toString();
            return result.toString(CryptoJS.enc.Utf8);
        }
        var data =
        {
            "organizationId": 3
        };

        const x = encrypt(data);
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI1MSIsImlhdCI6MTYzNzkwNDk1MCwiZXhwIjoxNjM4NzY4OTUwfQ.1W1mQ6hUE0UO8Ws95j9yBt-gM5T8Cl_h0H4ghwQsgjxXJuKW2a1KNDwxTISliIN8n89jlTLiHoMik3ay3EiHrw'
        }

        await axios.post('https://realplatformservice-hwr7nalbaq-uc.a.run.app/a1/common/difficulties',x, {
            headers: headers
        })
            .then((response) => {
                const mydata = response.data.data;
                function decrypt(data) {
                    const iv = CryptoJS.enc.Utf8.parse(mkey);
                    const key = CryptoJS.enc.Utf8.parse(mkey);
                    var result = CryptoJS.AES.decrypt({ ciphertext: CryptoJS.enc.Base64.parse(data) }, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
                    return JSON.parse(result.toString(CryptoJS.enc.Utf8));
                }

                const backenddata=decrypt(mydata);
                Gdata.data=backenddata;
                console.log(backenddata)
                // setGdata(backenddata)
            })
            .catch((error) => {
                console.error(error)
            })

    }

    useEffect(() => {

        aceesurl()

    }, []);
    return (
        <>
            <ul>
                {/* {Gdata && Gdata.map(data=>{
                    return <li>{data.name}</li>
                })} */}
            </ul>

        </>
    );
}
