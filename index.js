const { ArtEngine, inputs, generators, renderers, exporters } = require('@hashlips-lab/art-engine');

const BASE_PATH = __dirname;

const ae = new ArtEngine({
  cachePath: `${BASE_PATH}/cache`,
  outputPath: `${BASE_PATH}/output`,

  inputs: {
    pps: new inputs.ImageLayersInput({
      assetsBasePath: `${BASE_PATH}/data`,
    }),
  },

  generators: [
    new generators.ImageLayersAttributesGenerator({
      dataSet: 'pps',
      startIndex: 0,
      endIndex: 99,
    }),
  ],

  renderers: [
    new renderers.ItemAttributesRenderer({
      name: (itemUid) => `PFP #${itemUid}`,
      description: (attributes) => {
        return 'Esta é a descrição do seu NFT.';
      },
    }),
    new renderers.ImageLayersRenderer({
      width: 2000,
      height: 2000,
    }),
  ],

  exporters: [
    new exporters.ImagesExporter(),
    new exporters.Erc721MetadataExporter({
      imageUriPrefix: 'ipfs://bafy...../',
    }),
  ],
});


ae.run();
