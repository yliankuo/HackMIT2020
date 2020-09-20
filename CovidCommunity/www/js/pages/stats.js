const riskHist = {
		type: 'line',
		title: 'Historical Self Risk',
		fontsize: 6,
		color: '#5d7d94',
		legend: {
			draggable: false,
		},
		scaleX:{
			label:{text:"Day of Year"},
			labels: ['9/14','9/15','9/16','9/17','9/18','9/19','9/20']
		},
		scaleY:{
			label: "Risks"
		},
		plot: {
	        animation: {
	          effect: 'ANIMATION_EXPAND_BOTTOM',
	          method: 'ANIMATION_STRONG_EASE_OUT',
	          sequence: 'ANIMATION_BY_NODE',
	          speed: 275,
	        }
		},
		series:[
			{
				values: [56,19,30,27,70,40,63],
				text: "Self Risk"
			},
			{
				values: [63,93,26,84,58,72,35],
				text: "Alex's Risk"
			},
			{
				values: [53,41,26,41,33,20,90],
				text: "Bort's Risk"
			}
	]};

const encounterHist = {
		type: 'bar',
		title: 'Historical Encounters',
		fontsize: 6,
		color: '#5d7d94',
		legend: {
			draggable: false,
		},
		scaleX:{
			label:{text:"Day of Year"},
			labels: ['9/14','9/15','9/16','9/17','9/18','9/19','9/20']
		},
		scaleY:{
			label: "Encounters"
		},
		plot: {
	        animation: {
	          effect: 'ANIMATION_EXPAND_BOTTOM',
	          method: 'ANIMATION_STRONG_EASE_OUT',
	          sequence: 'ANIMATION_BY_NODE',
	          speed: 275,
	        }
		},
		series:[
			{
				values: [6,8,10,2,3,5,0],
				text: "Potential Encounters"
			},
			{
				values: [1,1,2,2,0,3,1],
				text: "Direct Encounters"
			}
	]};

const heatmapHist = {
		type: 'heatmap',
		title: 'Google Mobility Heatmap',
		fontsize: 6,
		color: '#5d7d94',
		legend: {
			draggable: false,
		},
		scaleX:{
			label:{text:"Day of Week"},
			labels: ["recreation", "groceries", "transit"]
		},
		scaleY:{
			label: {text:"Services"},
			labels:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
		},
		plot: {
	        animation: {
	          effect: 'ANIMATION_EXPAND_BOTTOM',
	          method: 'ANIMATION_STRONG_EASE_OUT',
	          sequence: 'ANIMATION_BY_NODE',
	          speed: 275,
	        }
		},
		series:[
			{
				values: [-26,-7,-27]
			},
			{
				values: [-17,6,-33]
			},
			{
				values: [-27,-19,-59]
			},
			{
				values: [-16,-5,-42]
			},
			{
				values: [-14,-3,-41]
			},
			{
				values: [-14,-4,-38]
			},
			{
				values: [-20,-7,-37]
			}
	]};

const bubble = 
	[{
      id: 'usa',
      parent: '',
      name: 'usa',
      group: ''
    },
    {
    	id: "California",
    	name: "California",
    	parent: "usa",
    	value: 47548,
    	group: "west"
    },
    {
    	id: "Texas",
    	name: "Texas",
    	parent: "usa",
    	value: 53105,
    	group: "southwest"
    },
    {
    	id: "Illinois",
    	name: "Illinois",
    	parent: "usa",
    	value: 37806,
    	group: "midwest"
    },
    {
    	id: "Wisconsin",
    	name: "Wisconsin",
    	parent: "usa",
    	value: 19262,
    	group: "midwest"
    },
    {
    	id: "Georgia",
    	name: "Georgia",
    	parent: "usa",
    	value: 23473,
    	group: "southwest"
    },
    {
    	id: "New York",
    	name: "New York",
    	parent: "usa",
    	value: 10266,
    	group: "northeast"
    }]
 
const chartConfig = {
    type: 'bubble-pack',
    plotarea: {
      margin: 10
    },
    _options: {
      padding: 0,
      minSize: 3,
      groupFilter: ["west","midwest","southwest","northeast"],
      format: {
        short: true,
        decimals: 2,
        decimalsSeparator: '.',
        thousandsSeparator: ','
      }
    },
    series: bubble
  };
window.addEventListener('load', () => {
	zingchart.render({
		id:'graph',
		data: riskHist,
		height:"95%",
	});
	zingchart.render({
		id:'region',
		data: chartConfig,
		height:"90%",
	});
});

function makeGraph(graph){
	if(graph == "risks"){
		zingchart.render({
		id:'graph',
		data: riskHist,
		height:"95%",
		});
	}else{
		if(graph == "heatmap"){
			zingchart.render({
			id:'graph',
			data: heatmapHist,
			height:"95%",
			});
		}else{
			zingchart.render({
			id:'graph',
			data: encounterHist,
			height:"95%",
			});
		}

	}
}