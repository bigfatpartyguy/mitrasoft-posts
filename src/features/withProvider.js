/* eslint-disable react/display-name */
const withProvider =
  ({store, Provider}) =>
  (WrappedComponent) =>
  (props) =>
    (
      <Provider store={store}>
        <WrappedComponent {...props} />
      </Provider>
    );

export default withProvider;
