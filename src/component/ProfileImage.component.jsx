export const ProfileImageUploader = ({ profileImage, handleFileChange }) => (
    <div className="my-4 flex flex-col items-start gap-6 md:flex-row md:items-center">
        <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-gray-200">
            {profileImage ? (
                <img
                    className="h-full w-full rounded-2xl object-cover"
                    src={URL.createObjectURL(profileImage)}
                    alt="Profile"
                />
            ) : (
                <span className="text-gray-400">No image</span>
            )}
        </div>
        <div>
            <label
                className="mb-2 inline-block cursor-pointer rounded-lg border-2 border-gray-200 px-4 py-1 hover:bg-gray-50 active:border-blue-600"
                htmlFor="profileImage"
            >
                Upload image
            </label>
            <input
                id="profileImage"
                name="profileImage"
                type="file"
                accept=".jpg, .jpeg, .png, .gif"
                onChange={handleFileChange}
                className="hidden"
            />
            <p className="text-gray-500">
                .jpg, .jpeg, .png, .gif files up to 1MB.
            </p>
        </div>
    </div>
);
