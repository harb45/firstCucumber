module.exports = {
    default: {
        require: ['steps/*.js'],
        'publish-quiet': true,
        format: ['json:./reports/cucumber_report.json']
    }
};