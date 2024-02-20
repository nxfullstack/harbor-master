import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import generator from './generator';
import { HarborMasterGeneratorSchema } from './schema';

describe('harbor-master generator', () => {
  let appTree: Tree;
  const options: HarborMasterGeneratorSchema = {
    name: 'test',
    resourceName: 'users',
    baseUrl: '/api/v1',
  };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace({ layout: 'apps-libs' });
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'test');
    expect(config).toBeDefined();
  });
});
