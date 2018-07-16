const faker = require('faker');

function rand() {
  const rnd = Math.random() - 0.5;
  return Math.sign(rnd) * Math.sqrt(Math.abs(rnd)) * 1.4;
}

function generateChartData(isActive) {
  const TOTAL_COUNT = 14;
  const emptyCount = isActive ? 0 : Math.floor(Math.random() * 5);
  const count = TOTAL_COUNT - emptyCount;

  return new Array(TOTAL_COUNT)
    .fill(true)
    .map((el, i) => (i < count ? Math.floor(Math.random() * 7) + 2 : 0));
}

exports.generateData = function() {
  const data = [];

  for (let i = 0; i < 721; i++) {
    data.push({
      serialNumber: faker.address.zipCode(),
      isActive: Math.random() > 0.03,
      lat: 55.755222 + rand() * 0.12242,
      long: 37.62102 + rand() * 0.180189
    });
  }

  return data;
};

exports.generateDetails = function({ isActive }) {
  const connections = isActive ? Math.floor(Math.random() * 7) + 4 : 0;

  return {
    connections: connections,
    chart: generateChartData(isActive).concat(connections)
  };
};
