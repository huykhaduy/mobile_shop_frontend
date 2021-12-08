//Setting option
UPLOADCARE_LOCALE = "vi"
UPLOADCARE_LOCALE_TRANSLATIONS = {
    buttons: {
        choose: {
            files: {
                one: 'Tải file ảnh',
            },
        },
    },
    uploading: 'Đang tải...',
    loadingInfo: 'Hoàn tất!',
    serverErrors: {
        AccountBlockedError:
            "Tài khoản tải lên đã bị khóa.",
        AccountUnpaidError:
            "Tài khoản tải lên đã bị khóa.",
        AccountLimitsExceededError:
            "Lượt tải lên bị giới hạn",
        FileSizeLimitExceededError: 'File quá lớn.',
        MultipartFileSizeLimitExceededError: 'File quá lớn.',
        FileTypeForbiddenOnCurrentPlanError:
            'Định dạng không được hỗ trợ.',
        DownloadFileSizeLimitExceededError: 'File tải xuống quá lớn'
    }
};
UPLOADCARE_PUBLIC_KEY = "aae2dbef14f835c48754"
UPLOADCARE_TABS = "file url"
//-----------------------------
// get a widget reference
const widget_edit = uploadcare.SingleWidget("#input_edit_file");
const widget_add = uploadcare.SingleWidget("#input_add_file");
