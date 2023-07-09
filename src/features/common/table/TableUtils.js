export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function StatusPill({ value }) {
  const status = value ? value.toLowerCase() : "unknown";

  return (
    <span
      className={classNames(
        "inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium  ring-1 ring-inset ring-green-600/20",
        status.startsWith("completed") ? "bg-green-50  text-green-700" : null,
        status.startsWith("upcoming") ? "bg-yellow-50 text-yellow-700" : null
      )}
    >
      {status}
    </span>
  );
}

export function AvatarCell({ value, column, row }) {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 h-10 w-10">
        <img
          className="h-10 w-10 rounded-full"
          src={row.original[column.imgAccessor]}
          alt=""
        />
      </div>
      <div className="ml-4">
        <div className="text-sm font-medium text-gray-900">{value}</div>
        <p class="mt-1 truncate text-xs leading-5 text-gray-500">
          {row.original[column.emailAccessor]}
        </p>
      </div>
    </div>
  );
}

export function BookedForCell({ value, column, row }) {
  return (
    <div className="flex items-center">
      <div className="ml-4">
        <div className="text-sm font-medium text-gray-900">{value}</div>
        <p class="mt-1 truncate text-xs leading-5 text-gray-500">
          {row.original[column.emailAccessor]}
        </p>
        <p class="mt-1 truncate text-xs leading-5 text-gray-500">
          {row.original[column.emailAccessor]}
        </p>
      </div>
    </div>
  );
}
