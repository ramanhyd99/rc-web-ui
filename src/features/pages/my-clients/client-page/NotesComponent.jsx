import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Spinner,
  Textarea,
} from "@material-tailwind/react";
import { useState } from "react";
import {
  useCreateNoteForUserIdMutation,
  useDeleteNoteByNoteIdMutation,
  useGetNotesQuery,
  useUpdateNoteByNoteIdMutation,
} from "../../../../apis/rtk-apis";
import { classNames, prettyDate } from "../../../../utils";

const Notes = ({ userId }) => {
  const [newNote, setNewNote] = useState(false);

  const { data, isFetching } = useGetNotesQuery({
    userId: userId,
  });

  const [createNoteForUserId, { isLoading: isCreating }] =
    useCreateNoteForUserIdMutation();

  const [updateNoteByNoteId] = useUpdateNoteByNoteIdMutation();

  const [deleteNoteByNoteId] = useDeleteNoteByNoteIdMutation();

  const handleNewNoteClick = () => {
    setNewNote(true);
  };

  const handleCreateNewNote = (note) => {
    createNoteForUserId({ user_id: userId, note: note });
    setNewNote(false);
  };

  const handleUpdateNote = (note_id, note) => {
    updateNoteByNoteId({ note_id: note_id, note: note });
  };

  const handleDeleteNoteClick = (note_id) => {
    // alert(note_id);
    deleteNoteByNoteId({ noteId: note_id });
  };

  return (
    <div className="w-full">
      <div className="space-y-4">
        {isFetching ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          data &&
          data.data?.map(({ note_id, created_at, note }) => {
            return (
              <NoteComp
                id={note_id}
                date={prettyDate(created_at)}
                data={note}
                handleDeleteNoteClick={handleDeleteNoteClick}
                handleUpdateNote={handleUpdateNote}
              />
            );
          })
        )}
        {isCreating && (
          <div className="flex justify-center">
            <Spinner />
          </div>
        )}
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
            <NewNoteComp
              setNewNote={setNewNote}
              handleCreateNewNote={handleCreateNewNote}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;

const NoteComp = ({
  id,
  date,
  data,
  handleDeleteNoteClick,
  handleUpdateNote,
}) => {
  const [canEditNote, setCanEditNote] = useState(false);
  const [textValue, setTextValue] = useState(data);

  const handleEditClick = () => {
    setCanEditNote(true);
  };

  const handleSaveClick = () => {
    setCanEditNote(false);
    handleUpdateNote(id, textValue);
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
                onClick={handleSaveClick}
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
              <MenuItem
                className="text-red-400"
                onClick={() => handleDeleteNoteClick(id)}
              >
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

const NewNoteComp = ({ setNewNote, handleCreateNewNote }) => {
  const date = getFormattedTodaysDate();
  const [textValue, setTextValue] = useState("");

  const handleCancelClick = () => {
    setNewNote(false);
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
      <div className="w-full sm:w-5/6">
        <Textarea
          label="Notes"
          className="h-[10rem]"
          onChange={handleInputChange}
        />

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
            onClick={() => handleCreateNewNote(textValue)}
            type="submit"
            // disabled={isCreating}
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
