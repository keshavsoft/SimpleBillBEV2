let StartFunc = async (Res) => {
    let jVarLocalRes = await Res.text();
    Swal.fire({
        title: 'Duplicate',
        text: `${jVarLocalRes}`,
        icon: "error"
    })

};

export { StartFunc };