process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if(input !== null) {
		var instruction = input.toString().trim();
		switch (instruction) {
		case '/ver':
			process.stdout.write('The node version is: ' + process.version);
			break;
		case '/exit':
			process.stdout.write('Quitting app!\n');
			process.exit();
			break;
		case '/language':
			process.stdout.write('The system language is: ' + process.env.lang);
			break;
		default:
			process.stderr.write('Wrong instruction!\n');
		}
	}
});
