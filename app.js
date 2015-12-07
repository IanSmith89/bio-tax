
var LivingOrganism = function() {
  return {
    commonName: 'Life',
    foundOnEarth: true,
    replicatorMolecule: 'DNA',
    domain: 'N/A',
    kingdom: 'N/A',
    phylum: 'N/A',
    class: 'N/A',
    order: 'N/A',
    family: 'N/A',
    genus: 'N/A',
    species: 'N/A',
    subspecies: 'N/A',
    description: 'N/A'
  };
};

// -------DOMAINS-------

var Archaea = function() {
  var self = new LivingOrganism();
  self.domain = 'Archaea';
  return self;
};

var Bacteria = function() {
  var self = new LivingOrganism();
  self.domain = 'Bacteria';
  return self;
};

var Eukaryote = function() {
  var self = new LivingOrganism();
  self.domain = 'Eukaryota';
  return self;
};

var Animal = function() {
  var self = new Eukaryote();
  self.kingdom = 'Animalia';
  return self;
};

var Protozoa = function() {
  var self = new Animal();
  self.phylum = 'Protozoa';
  return self;
};

var Porifera = function() {
  var self = new Animal();
  self.phylum = 'Porifera';
  return self;
};

var Collenterata = function() {
  var self = new Animal();
  self.phylum = 'Collenterata';
  return self;
};

var Platyhelminthes = function() {
  var self = new Animal();
  self.phylum = 'Platyhelminthes';
  return self;
};

var Aschelminthes = function() {
  var self = new Animal();
  self.phylum = 'Aschelminthes';
  return self;
};

var Annelida = function() {
  var self = new Animal();
  self.phylum = 'Annelida';
  return self;
};

var Arthropoda = function() {
  var self = new Animal();
  self.phylum = 'Arthropoda';
  return self;
};

var Molluska = function() {
  var self = new Animal();
  self.phylum = 'Molluska';
  return self;
};

var Echinodermata = function() {
  var self = new Animal();
  self.phylum = 'Echinodermata';
  return self;
};

var Chordata = function() {
  var self = new Animal();
  self.phylum = 'Chordata';
  return self;
};

var Fungi = function() {
  var self = new Eukaryote();
  self.kingdom = 'Fungi';
  return self;
};

var Monera = function() {
  var self = new Eukaryote();
  self.kingdom = 'Monera';
  return self;
};

var Plant = function() {
  var self = new Eukaryote();
  self.kingdom = 'Plantae';
  return self;
};

var Protist = function() {
  var self = new Eukaryote();
  self.kingdom = 'Protista';
  return self;
};
