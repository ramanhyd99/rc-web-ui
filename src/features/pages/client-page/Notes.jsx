import {
  EllipsisHorizontalIcon
} from "@heroicons/react/24/outline";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Textarea
} from "@material-tailwind/react";
import { useState } from "react";
import { classNames } from "../../../utils";

const Notes = () => {
  const [newNote, setNewNote] = useState(false);

  const handleNewNoteClick = () => {
    setNewNote(true);
  };
  return (
    <div className="w-full">
      <div className="space-y-4">
        <NoteComp
          date="3 Sept 2023"
          data="Initial assessment: Client shows symptons of ADHD."
        />
        <NoteComp
          date="9 Sept 2023"
          data="Conducted DBT session, gave an assignment to create timeline."
        />
      </div>
      <div className="mt-7">
        {!newNote ? (
          <div className="flex justify-center">
            <button
              onClick={handleNewNoteClick}
              name="files"
              type="submit"
              className={classNames(
                "flex rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                //   isLoading ? "cursor-not-allowed" : ""
              )}
            >
              + New note
            </button>
          </div>
        ) : (
          <div className="mt-12">
            <NewNoteComp setNewNote={setNewNote} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;

const NoteComp = ({ date, data }) => {
  const [canEditNote, setCanEditNote] = useState(false);
  const [textValue, setTextValue] = useState(data);

  const handleEditClick = () => {
    setCanEditNote(true);
  };

  const handleCancelClick = () => {
    setTextValue(data);

    setCanEditNote(false);
  };

  const handleInputChange = (event) => {
    setTextValue(event.target.value);
  };

  return (
    <div className="sm:flex flex-row-reverse justify-around space-y-2 sm:space-x-2">
      <div className="flex justify-center items-center text-gray-700">
        <span
          className={` rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20
   `}
        >
          {date}
        </span>
      </div>
      <div className="w-full sm:w-5/6 flex space-x-1">
        <div className="w-full">
          <Textarea
            value={textValue}
            label="Notes"
            className="h-[10rem]"
            disabled={!canEditNote}
            onChange={handleInputChange}
          />

          {canEditNote && (
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleCancelClick}
                className={classNames(
                  "flex rounded-md bg-gray-100 px-3 py-2 text-xs font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                )}
              >
                Cancel
              </button>
              <button
                onClick={handleEditClick}
                className={classNames(
                  "flex rounded-md bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                )}
              >
                Save
              </button>
            </div>
          )}
        </div>
        <div>
          <Menu>
            <MenuHandler>
              <EllipsisHorizontalIcon className="h-6" />
              {/* <EllipsisVerticalIcon className="h-6" /> */}
            </MenuHandler>
            <MenuList>
              <MenuItem onClick={handleEditClick}>Edit</MenuItem>
              <MenuItem className="text-red-400">Delete</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

const NewNoteComp = ({ setNewNote }) => {
  const date = getFormattedTodaysDate();

  const handleCancelClick = () => {
    setNewNote(false);
  };

  return (
    <div className="sm:flex flex-row-reverse justify-around space-y-2 sm:space-x-2">
      <div className="flex justify-center items-center text-gray-700">
        <span
          className={` rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20
   `}
        >
          {date}
        </span>
      </div>
      <div className="w-full sm:w-5/6">
        <Textarea label="Notes" className="h-[10rem]" />

        <div className="flex justify-center sm:justify-end space-x-2">
          <button
            onClick={handleCancelClick}
            className={classNames(
              "flex rounded-md bg-gray-100 px-3 py-2 text-xs font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            )}
          >
            Cancel
          </button>
          <button
            name="files"
            // onClick={handleSubmitUploads}
            type="submit"
            // disabled={isLoading}
            className={classNames(
              "flex rounded-md bg-blue-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              //   isLoading ? "cursor-not-allowed" : ""
            )}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const getFormattedTodaysDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
