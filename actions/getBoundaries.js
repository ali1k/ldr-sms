export default function getBoundaries(context, payload, done) {
    context.service.read('resource.boundaries', payload, {}, function (err, res) {
        if (err) {
            context.dispatch('FIND_BOUNDARIES_FAILURE', err);
        } else {
            context.dispatch('FIND_BOUNDARIES_SUCCESS', res);
        }
        done();
    });
}
