import { ShieldCheckIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useUploadAssignmentsMutation } from "../../../apis/user";
import { ErrorToast } from "../../common/toast/ErrorToast";

const fileTypes = ["JPG", "PNG", "GIF", "PDF", "JPEG", "TXT"];

function bytesToMB(bytes) {
  const megabytes = bytes / (1024 * 1024);
  return megabytes.toFixed(2); // Limiting the result to 2 decimal places
}

const DropZone = () => {
  return (
    <div class="col-span-full flex justify-center items-center">
      <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 w-full lg:w-3/4">
        <div class="text-center">
          <svg
            class="mx-auto h-12 w-12 text-gray-300"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
              clip-rule="evenodd"
            />
          </svg>
          <div class="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              for="file-upload"
              class="relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span>Upload file(s)</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                class="sr-only"
              />
            </label>
            <p class="pl-1">or drag and drop</p>
          </div>
          <p class="text-xs leading-5 text-gray-600">
            PDF, PNG, JPG, TXT up to 10MB
          </p>
        </div>
      </div>
    </div>
  );
};

const UploadAssignment = ({ userId }) => {
  const [fileList, setFileList] = useState(null);
  const [uploadAssigment, { isError, isLoading }] =
    useUploadAssignmentsMutation();

  const handleChange = (file) => {
    if (file.length > 5) {
      ErrorToast("You pcan upload only 5 files at a time.");
    } else setFileList(file);
  };

  const handleTypeError = () => {
    ErrorToast("Invalid file type");
  };

  const handleSizeError = () => {
    ErrorToast("File size too large (>10MB)");
  };

  const handleClearUploads = () => {
    setFileList(null);
  };

  const handleSubmitUploads = (event) => {
    event.preventDefault();
    console.log(fileList)
    uploadAssigment({ fileList: fileList });
  };

  return (
    <div className="mt-0">
      <div className="flex justify-center">
        <div class="mt-10 flex items-center gap-x-4 justify-center w-full lg:w-1/2">
          <div class="h-px flex-auto bg-gray-100 "></div>
          <h4 class="flex-none text-sm leading-6 text-gray-400">
            Upload new assignment
          </h4>
          <div class="h-px flex-auto bg-gray-100"></div>
        </div>
      </div>
      <div className="w-full">
        <form>
          <FileUploader
            maxSize="10"
            handleChange={handleChange}
            name="file"
            multiple={false}
            types={fileTypes}
            children={<DropZone />}
            onTypeError={handleTypeError}
            onSizeError={handleSizeError}
            dropMessageStyle={{
              background: "lightblue",
            }}
          />

          {fileList && (
            <div>
              <div>
                <div class="mt-4 lg:w-2/3 w-full mx-auto overflow-auto">
                  <table class="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                      <tr>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                          File
                        </th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                          Size
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from(fileList).map((file) => (
                        <tr>
                          <td className="flex p-2">
                            <ShieldCheckIcon className="h-6 w-6 text-green-500 mr-2" />
                            {file.name}
                          </td>
                          <td>{bytesToMB(file.size)} MB</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="mt-6 flex items-center justify-end gap-x-6">
                <button
                  onClick={handleClearUploads}
                  type="button"
                  class="text-sm font-semibold leading-6 text-gray-900"
                >
                  Clear
                </button>
                <button
                  name="files"
                  onClick={handleSubmitUploads}
                  type="submit"
                  class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Upload
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default UploadAssignment;
