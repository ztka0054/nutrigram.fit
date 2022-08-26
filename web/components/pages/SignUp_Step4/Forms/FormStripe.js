import React, { useState, useMemo } from "react";
import { useRouter } from "next/router";
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
} from "@stripe/react-stripe-js";

import useApp from "../../../../hooks/useApp";
import TagLang from "../../../modules/GetTagLang";

import request from "../../../../helper/core_services/core/requestService";
import subscription from "../../../../helper/core_services/endpoints/subscription";
import GetLanguage from "../../../../helper/i18n/getValueTagLang";
import { loadElement } from "../../../../helper/appearance/load";
import { message_1 } from "../../../../helper/appearance/messages";

const cardVisa = "/static/img/favicons/card/visa.svg";
const cardMaster = "/static/img/favicons/card/master.svg";
const cardAmerica = "/static/img/favicons/card/america.svg";

export default function FormStripe() {
    const stripe = useStripe();
    const router = useRouter();
    const elements = useElements();
    const options = useOptions();
    const { locale, objectsSignUp } = useApp();
    const [messageError, setMessageError] = useState(null);
    const [brandCard, setBrandCard] = useState(null);

    const PutBrandCard = (e) => {
        if (e.elementType == "cardNumber")
            switch (e.brand) {
                case "visa":
                    setBrandCard(1);
                    break;
                case "mastercard":
                    setBrandCard(2);
                    break;
                case "amex":
                    setBrandCard(3);
                    break;
                default:
                    setBrandCard(0);
                    break;
            }
        if (typeof e.error != "undefined") setMessageError(e.error.code);
        else setMessageError(null);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        loadElement(true);

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            loadElement(false);
            return;
        }

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement),
        });
        console.log(payload);
        PayElement(payload);
    };

    const PayElement = async (payload) => {
        console.log(payload);

        if (typeof payload.paymentMethod != "undefined") {
            let params = {
                paymentMethodId: payload.paymentMethod.id,
                price: objectsSignUp.selectedSubscritpion.id,
                //invoiceId: moment().format('HH:mm:ss/DD/MM/YYYY')
            };
            loadElement(true);
            let req = await request(
                subscription.post_subscription,
                params,
                null,
                {
                    locale,
                },
                true,
                false
            );
            loadElement(false);
            if (req != null) {
                message_1(GetLanguage("validation", "pay_message_1"));
                if (!req?.code) router.push("/dashboard/patients");
            }
        }
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="row">
                <div className="col-12">
                    <div className="sty-cont-input-2">
                        <div className="sty-tag">
                            <TagLang group={"input"} tag={"cardNumber"} />
                        </div>
                        <div className="sty-input">
                            <CardNumberElement
                                className={"sty-input-card"}
                                options={options}
                                onReady={() => {
                                    console.log("CardNumberElement [ready]");
                                }}
                                onChange={(event) => {
                                    console.log(
                                        "CardNumberElement [change]",
                                        event
                                    );
                                    PutBrandCard(event);
                                }}
                                onBlur={() => {
                                    console.log("CardNumberElement [blur]");
                                }}
                                onFocus={() => {
                                    console.log("CardNumberElement [focus]");
                                }}
                            />
                            <div className="sty-brand">
                                {brandCard == 0 && <></>}
                                {brandCard == 1 && (
                                    <div className="sty-cont-icon">
                                        <img src={cardVisa} />
                                    </div>
                                )}
                                {brandCard == 2 && (
                                    <div className="sty-cont-icon">
                                        <img src={cardMaster} />
                                    </div>
                                )}
                                {brandCard == 3 && (
                                    <div className="sty-cont-icon">
                                        <img src={cardAmerica} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="sty-cont-input-2">
                        <div className="sty-tag">
                            <TagLang group={"input"} tag={"expirationDate"} />
                        </div>
                        <div className="sty-input">
                            <CardExpiryElement
                                className={"sty-input-card"}
                                options={options}
                                onReady={() => {
                                    console.log("CardNumberElement [ready]");
                                }}
                                onChange={(event) => {
                                    console.log(
                                        "CardNumberElement [change]",
                                        event
                                    );
                                }}
                                onBlur={() => {
                                    console.log("CardNumberElement [blur]");
                                }}
                                onFocus={() => {
                                    console.log("CardNumberElement [focus]");
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="sty-cont-input-2">
                        <div className="sty-tag">
                            <TagLang group={"input"} tag={"cvc"} />
                        </div>
                        <div className="sty-input">
                            <CardCvcElement
                                className={"sty-input-card"}
                                options={options}
                                onReady={() => {
                                    console.log("CardNumberElement [ready]");
                                }}
                                onChange={(event) => {
                                    console.log(
                                        "CardNumberElement [change]",
                                        event
                                    );
                                }}
                                onBlur={() => {
                                    console.log("CardNumberElement [blur]");
                                }}
                                onFocus={() => {
                                    console.log("CardNumberElement [focus]");
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 sty-card-message">
                {messageError && (
                    <div className="sty-mesage text-center">
                        {GetLanguage("validation", messageError)}
                    </div>
                )}
            </div>
            <button
                className="sty-button-dash-1 color_3 fix-24"
                type="submit"
                disabled={!stripe}>
                <TagLang group={"button"} tag={"pay"} />
            </button>
        </form>
    );
}

const useOptions = () => {
    const options = useMemo(() => ({
        style: {
            base: {
                fontSize: "20.25px",
                color: "#424770",
                letterSpacing: "0.025em",
                fontFamily: "Roboto, monospace",
                "::placeholder": {
                    color: "#aab7c4",
                },
            },
            invalid: {
                color: "#9e2146",
            },
        },
    }));

    return options;
};
