export const formatDate = function (rawDate) {
	return rawDate.toISOString().split('T')[0];
};
