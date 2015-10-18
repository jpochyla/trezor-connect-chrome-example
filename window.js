document.getElementById('run').onclick = trezorComposeTx;

function trezorComposeTx() {
    var address = document.getElementById('address').value;
    var amount = document.getElementById('amount').value;

    var outputs = [{
        address: address,
        amount: parseInt(amount)
    }];

    TrezorConnect.composeAndSignTx(outputs, function (result) {
        if (result.success) {
            console.log('Serialized TX:', result.serialized_tx); // tx in hex
            console.log('Signatures:', result.signatures); // array of signatures, in hex
        } else {
            console.error('Error:', result.error); // error message
        }
    });
}
