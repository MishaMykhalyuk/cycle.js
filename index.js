import xs from 'xstream';
import {run} from '@cycle/xstream-run';
import {makeDOMDriver, div, input, button} from '@cycle/dom';

function main(sources){
	const moveLeft$ = sources.DOM
		.select('.move-left')
		.events('click')
		.mapTo(-1);

	const moveRigth$ = sources.DOM
		.select('.move-rigth')
		.events('click')
		.mapTo(+1);

	const state$ = xs.merge(moveLeft$, moveRigth$)

	const sinks = {
		DOM: state$
			.fold((acc, x) => acc + x, 20)
			.map(value =>
				div([
					button('.move-left', 'move left'),
					input({attrs: {type: 'range', min: 0, max: 100, value: value}}),
					button('.move-rigth', 'move rigth'),
				])
			)
	};

	return sinks;
}

const drivers = {
	DOM: makeDOMDriver('#app')
};

run(main, drivers);