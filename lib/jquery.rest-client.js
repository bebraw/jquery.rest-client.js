define(['jquery'], function($) {
    return function(url) {
        function request(type, cb, data, suffix) {
            suffix = suffix || '';

            $.ajax({
                url: url + suffix,
                type: type,
                data: data,
                success: function(d) {
                    cb(null, d);
                },
                error: function(xhr, err) {
                    cb(err);
                }
            });
        }

        return {
            get: request.bind(undefined, 'GET'),
            post: request.bind(undefined, 'POST'),
            put: request.bind(undefined, 'PUT'),
            del: request.bind(undefined, 'DELETE')
        };
    };
});
