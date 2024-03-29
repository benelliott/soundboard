class Sound {

    private static idFromDisplayName(displayName: string): string {
        return displayName.replace(' ', '_').toLowerCase();
    };

    private static SOUND_FILEPATH_PREFIX = 'sounds/';
    private static SOUND_FILEPATH_SUFFIX = '.mp3';

    private static soundPathFromId(id: string): string {
        return Sound.SOUND_FILEPATH_PREFIX + id + Sound.SOUND_FILEPATH_SUFFIX;
    }

    private static IMAGE_FILEPATH_PREFIX = 'images/';
    private static IMAGE_FILEPATH_SUFFIX = '.jpg';

    private static imagePathFromId(id: string): string {
        return Sound.IMAGE_FILEPATH_PREFIX + id + Sound.IMAGE_FILEPATH_SUFFIX;
    }

    private soundPath: string;
    private imagePath: string;
    private soundButtonId: string;

    constructor(private displayName:string) {
        this.soundButtonId = Sound.idFromDisplayName(displayName);
        this.soundPath = Sound.soundPathFromId(this.soundButtonId);
        this.imagePath = Sound.imagePathFromId(this.soundButtonId);
    }

    public generateSoundButtonHtml(): string {
        return `
        <div class="wrapper-button" id="${this.soundButtonId}" title="${this.displayName}" style="background-image: url('${this.imagePath}')">
        </div>
        `;
    }

    public generateSoundButtonJs(): string {
        return `
        document.getElementById('${this.soundButtonId}').addEventListener('click', function(){
            playSound('${this.soundPath}');
        });
        `;
    }

}