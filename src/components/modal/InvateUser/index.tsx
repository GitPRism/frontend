import InvateForm from "./InvateForm";

function InvateUser() {
  return (
    <dialog id="invate-user-modal" className="modal text-black">
      <div className="modal-box w-11/12 max-w-2xl">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <InvateForm />
      </div>
    </dialog>
  );
}

export default InvateUser;
