document.addEventListener("DOMContentLoaded", function () {

    if (document.querySelector('.cart_totals.calculated_shipping') !== null) {
        var firstTable = document.querySelector('.cart_totals.calculated_shipping');
        var ttr = document.querySelectorAll('.cart_totals.calculated_shipping table tbody tr th');
    }

    if (document.querySelector('.shop_table.woocommerce-checkout-payment-total') !== null) {
        var secondTable = document.querySelector('.shop_table.woocommerce-checkout-payment-total');
        var ttr = document.querySelectorAll('.shop_table.woocommerce-checkout-payment-total tbody tr th');
    }

    if (document.querySelector('.order-details-column .cart_totals') !== null) {
        var thirdTable = document.querySelector('.order-details-column .cart_totals');
        var ttr = document.querySelectorAll('.order-details-column .cart_totals table tbody tr th');
    }

    function wholeAction() {

        if (firstTable !== null || secondTable !== null || thirdTable !== null) {

            for (i = 0; i < ttr.length; i++) {

                if (ttr[i].innerText.includes("Sous-total") === true) {

                    this.ttr[i].innerText = "Sous-total :";
                    var stSum = this.ttr[i].nextElementSibling.childNodes[0].innerText;

                }

                if (ttr[i].innerText.includes("Code promo") === true) {

                    this.ttr[i].innerText = "Code promo :";
                    var cpSum = this.ttr[i].nextElementSibling.innerText;

                }

                if (ttr[i].innerText.includes("Expédition") === true) {

                    this.ttr[i].innerText = "Expédition :";

                    if (this.ttr[i].nextElementSibling.innerText.includes("Livraison gratuite") === false) {

                        if (this.ttr[i].nextElementSibling.childNodes[2] !== null) {
                            this.ttr[i].nextElementSibling.childNodes[2].style = "display: none;";
                        }

                        var expSum = this.ttr[i].nextElementSibling.innerText;

                    }

                    else if (this.ttr[i].nextElementSibling.innerText.includes("Livraison gratuite") === true) {

                        var expSum = "00,00€";

                    }

                }

                if (ttr[i].innerText.includes("Taux Standard") === true) {

                    this.ttr[i].innerText = "Montant TVA 20% :";

                }

                if (ttr[i].innerText.includes("Moyen de paiement") === true) {

                    this.ttr[i].innerText = "Mode de paiement :";

                }


                if (ttr[i].innerText.includes("Total") === true) {

                    this.ttr[i].innerText = "Total (TTC) :";

                }

            }

            calculateSum();

        }


        /**************************************************************************/

        function calculateSum() {

            //Get the total (HT)

            if (stSum !== undefined) {

                stSum = stSum.split('€');

                stSum = stSum[0].replace(',', '.');

                stSum = stSum.replace(/\s+/g, '');

                stSum = Number(stSum);

            }

            /**************************************************************************/

            if (cpSum !== undefined) {

                cpSum = cpSum.split('€');

                cpSum = cpSum[0].replace(',', '.');

                cpSum = cpSum.replace(/\s+/g, '');

                cpSum = Number(cpSum);

            }

            /**************************************************************************/

            if (expSum !== undefined) {

                expSum = expSum.split('€');

                expSum = expSum[0].replace(',', '.');

                expSum = expSum.replace(/\s+/g, '');

                expSum = Number(expSum);

            }

            /**************************************************************************/

            if (stSum !== undefined && cpSum === undefined && expSum !== undefined) {

                var totalSum = stSum + expSum;

                totalSum = totalSum.toFixed(2);

                totalSum = totalSum.replace('.', ',');

                if (firstTable !== undefined || secondTable !== undefined) {

                    for (i = 0; i < ttr.length; i++) {

                        if (ttr[i].innerText.includes("Montant") === true) {

                            this.ttr[i].parentNode.insertAdjacentHTML('beforebegin', '<tr class=""><th>Total (HT) :</th><td><span class="amount">' + totalSum + '<span class="woocommerce-Price-currencySymbol">€</span></span></td></tr>');

                        }

                    }
                }

                else if (thirdTable !== undefined) {

                    for (i = 0; i < ttr.length; i++) {

                        if (ttr[i].innerText.includes("Montant") === true) {

                            this.ttr[i].parentNode.insertAdjacentHTML('beforebegin', '<tr class=""><th scope="row" colspan="2">Total (HT) :</th><td colspan="2"><span class="amount">' + totalSum + '<span class="woocommerce-Price-currencySymbol">€</span></span></td></tr>');

                        }

                    }
                }

            }

            else if (stSum !== undefined && cpSum !== undefined && expSum !== undefined) {

                var totalSum = stSum + cpSum + expSum;

                totalSum = totalSum.toFixed(2);

                totalSum = totalSum.replace('.', ',');

                if (firstTable !== undefined || secondTable !== undefined) {

                    for (i = 0; i < ttr.length; i++) {

                        if (ttr[i].innerText.includes("Montant") === true) {

                            this.ttr[i].parentNode.insertAdjacentHTML('beforebegin', '<tr class=""><th>Total (HT) :</th><td><span class="amount">' + totalSum + '<span class="woocommerce-Price-currencySymbol">€</span></span></td></tr>');

                        }

                    }
                }

                else if (thirdTable !== undefined) {

                    for (i = 0; i < ttr.length; i++) {

                        if (ttr[i].innerText.includes("Montant") === true) {

                            this.ttr[i].parentNode.insertAdjacentHTML('beforebegin', '<tr class=""><th scope="row" colspan="2">Total (HT) :</th><td colspan="2"><span class="amount">' + totalSum + '<span class="woocommerce-Price-currencySymbol">€</span></span></td></tr>');

                        }

                    }
                }

            }

        }

    }

    wholeAction();

    jQuery(document).ajaxStop(function () {

        wholeAction();

    });

});
