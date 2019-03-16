import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
var myJSON = require('./test.json');

var id = 0;
var selectedIds = [];

class Grid extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="container-fluid">
                        <h1>Test</h1>
                        
                    </div>
                </div>
                <button type="button" className="btn btn-primary">Submit</button>
            </div>
        );
    }
}

function buildGrid(data) {
    var grid = document.querySelector(".container-fluid");
    var gbody = document.createElement("div");
    gbody.className = "gbody";

    data.forEach(function (el) {
        var row = document.createElement("div");
        row.className = "row";

        var img = document.createElement("img");
        img.className = "col";
        img.src = el.imageUrl;
        row.appendChild(img);

        var nameCat = document.createElement("div");
        nameCat.className = "col";
        nameCat.appendChild(document.createTextNode(el.name));
        row.appendChild(nameCat);

        row.onclick = function () {
            id = el.id;

            var index = selectedIds.indexOf(id);

            if (index > -1) {
                selectedIds.splice(index, 1);
                row.style.background = "rgb(250, 247, 235)";
            } else {
                selectedIds.push(el.id);
                row.style.background = "rgb(230, 240, 230)";
            }
        }

        gbody.appendChild(row);
    });

    grid.appendChild(gbody);
    return grid;
}

window.onload = function () {
    document.querySelector(".container").appendChild(buildGrid(myJSON));
    document.querySelector(".btn").onclick = function () {
        alert('Id selected: ' + selectedIds);
    };
}

ReactDOM.render(
    <Grid />,
    document.getElementById('root')
);