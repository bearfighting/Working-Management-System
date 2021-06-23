module.exports = (req, res) => {
    let a = req.query['a'];
    let b = req.query['b'];
    let result = parseInt(a) + parseInt(b);
    res.json({
        res: result
    });
    // res.send("Hello");
}
