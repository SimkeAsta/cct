import * as service from "../../../service";
import { getComponents } from "../thunks";
import { SET_COMPONENTS } from "../types";

describe('getComponents', () => {
  it('calls getComponents thunk successfully', async () => {
    const mockDispatch = jest.fn();

    const spy = jest.spyOn(service, 'getComponentsData');
    spy.mockResolvedValue([{stationName: 'Lovely FM', frequency: '100.8'}]);

    await getComponents()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: SET_COMPONENTS,
      }),
    );
  });

  it('calls getComponents thunk unsuccessfully', async () => {
    const mockDispatch = jest.fn();

    const spy = jest.spyOn(service, 'getComponentsData');
    spy.mockRejectedValue(new Error('MOCK ERROR'));
    const result = await getComponents()(mockDispatch);

    expect(result).toBe(undefined);
  });
});

