let name = 'Ondra';

console.log(`Hello, my dear ${name}`);

// jQuery part

$('p').html('The <stribg>jQuery</strong> part has started!');

$('h1').css('background', 'red');

$('h2').toggleClass('green');
$('p').toggleClass('green');
$('p').toggleClass('green');

$('main').append('<p>Added elemment</p>');
$('main').append('<p>Added second elemment</p>');