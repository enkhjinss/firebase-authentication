import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useEffect, useState, useRef } from "react";
import { auth } from "./firebase";

import "./Login.css";
const App = () => {
    const [code, setCode] = useState("");
    const [a, setA] = useState(true);
    const recaptchaVerifier = useRef();
    const confirmationResult = useRef();
    useEffect(() => {
        recaptchaVerifier.current = new RecaptchaVerifier(
            "recaptcha-container",
            {},
            auth
        );
    }, []);

    const onClickLogin = async () => {
        confirmationResult.current = await signInWithPhoneNumber(
            auth,
            `+976${code}`,
            recaptchaVerifier.current
        );

        setA(false);
        setCode("");
    };

    const checkCode = async () => {
        await confirmationResult.current.confirm(code);
        alert("successx");
    };
    return (
        <main>
            {a ? (
                <>
                    <div id="recaptcha-container"></div>
                    <input
                        placeholder="phone number"
                        type="number"
                        className="phoneNumberInput"
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <button onClick={onClickLogin}>code</button>
                </>
            ) : (
                <>
                    <input
                        type="number"
                        placeholder="code"
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <button onClick={checkCode}>check code</button>
                </>
            )}
        </main>
    );
};

export default App;
