export function CardWrapper({ children }) {
  return (
    <div className="ring-1 ring-gray-400 py-2 px-2 w-96 m-1  bg-white rounded shadow p-6  lg:w-3/4 lg:max-w-lg">
      {children}
    </div>
  );
}
