(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"start":"this.init()","data":{"history":{},"locales":{"en":"locale/en.txt"},"name":"Player543","displayTooltipInTouchScreens":true,"textToSpeechConfig":{"speechOnQuizQuestion":false,"pitch":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"rate":1},"defaultLocale":"en"},"backgroundColorRatios":[0],"gap":10,"scripts":{"getMainViewer":TDV.Tour.Script.getMainViewer,"getPixels":TDV.Tour.Script.getPixels,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"unregisterKey":TDV.Tour.Script.unregisterKey,"downloadFile":TDV.Tour.Script.downloadFile,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"createTween":TDV.Tour.Script.createTween,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"playAudioList":TDV.Tour.Script.playAudioList,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getOverlays":TDV.Tour.Script.getOverlays,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setMapLocation":TDV.Tour.Script.setMapLocation,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"existsKey":TDV.Tour.Script.existsKey,"clone":TDV.Tour.Script.clone,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"shareSocial":TDV.Tour.Script.shareSocial,"translate":TDV.Tour.Script.translate,"mixObject":TDV.Tour.Script.mixObject,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"textToSpeech":TDV.Tour.Script.textToSpeech,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"initAnalytics":TDV.Tour.Script.initAnalytics,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizFinish":TDV.Tour.Script.quizFinish,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"startMeasurement":TDV.Tour.Script.startMeasurement,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"init":TDV.Tour.Script.init,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"cloneBindings":TDV.Tour.Script.cloneBindings,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getComponentByName":TDV.Tour.Script.getComponentByName,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"enableVR":TDV.Tour.Script.enableVR,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setLocale":TDV.Tour.Script.setLocale,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setValue":TDV.Tour.Script.setValue,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showWindow":TDV.Tour.Script.showWindow,"initQuiz":TDV.Tour.Script.initQuiz,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"registerKey":TDV.Tour.Script.registerKey,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"disableVR":TDV.Tour.Script.disableVR,"historyGoBack":TDV.Tour.Script.historyGoBack,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showPopupImage":TDV.Tour.Script.showPopupImage,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"isPanorama":TDV.Tour.Script.isPanorama,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"quizShowScore":TDV.Tour.Script.quizShowScore,"toggleVR":TDV.Tour.Script.toggleVR,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"resumePlayers":TDV.Tour.Script.resumePlayers,"openLink":TDV.Tour.Script.openLink,"executeJS":TDV.Tour.Script.executeJS,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getMediaByName":TDV.Tour.Script.getMediaByName,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizStart":TDV.Tour.Script.quizStart,"getKey":TDV.Tour.Script.getKey,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver},"layout":"absolute","hash": "3eabfdddb68a43dad3ed3710fde0a3a53c8e6c9362db5d845b68e3f54d08f728", "definitions": [{"top":"0.06%","right":"0%","gap":10,"scrollBarOpacity":0,"overflow":"scroll","data":{"name":"Container"},"children":["this.WebFrame_362DBF06_238C_8DC4_41B1_0D2147611BA8"],"layout":"absolute","minHeight":20,"scrollBarColor":"#000000","minWidth":20,"backgroundOpacity":0,"height":"31.477%","width":"29.348%","class":"Container","propagateClick":false,"scrollBarMargin":2,"id":"Container_307FE49A_238B_BCCC_41BA_17CC35204F4D"},{"sphericalHarmonicsMaxDegree":3,"environmentIntensity":0.5,"label":trans('model_06F5BDD6_13E9_E2B1_41AF_89EF3C062003.label'),"surfaceSelectionCoef":2,"thumbnailUrl":"media/model_06F5BDD6_13E9_E2B1_41AF_89EF3C062003_t.jpg","surfaceReticleMaxRadius":50,"antialiasingLevel":0.3,"castShadow":true,"surfaceReticleMinRadius":15,"objects":[],"data":{"label":"Untitled","showOnlyHotspotsLineSight":true,"showOnlyHotspotsLineSightInPanoramas":true,"keepModel3DLoadedWithoutLocation":true},"model":"this.res_06F56DD6_13E9_E2B1_41A9_B31F934B70A3","camera":"this.cam_06B902F3_13E8_2677_41AB_5BB3BC408FE5","backgroundColor":"#333333","surfaceReticleRadius":0.02,"lights":["this.light_068132F3_13E8_2677_41B1_31F0733901DD","this.light_068072F3_13E8_2677_4170_001EF8A847AF"],"class":"Model3D","id":"model_06F5BDD6_13E9_E2B1_41AF_89EF3C062003","floorRadius":18.56},{"data":{"name":"WebFrame"},"bottom":"8.22%","scrollEnabled":false,"minHeight":1,"width":"87.778%","minWidth":1,"backgroundOpacity":0,"height":"80.594%","url":trans('WebFrame_362DBF06_238C_8DC4_41B1_0D2147611BA8.url'),"class":"WebFrame","left":"6.05%","propagateClick":false,"id":"WebFrame_362DBF06_238C_8DC4_41B1_0D2147611BA8"},{"vrPointerSelectionTime":2000,"subtitlesTextShadowHorizontalLength":1,"toolTipBorderColor":"#767676","toolTipPaddingBottom":4,"playbackBarHeadBorderRadius":0,"firstTransitionDuration":0,"data":{"name":"Main Viewer"},"playbackBarHeadBorderColor":"#000000","minHeight":50,"width":"100%","minWidth":100,"subtitlesTop":0,"subtitlesBottom":50,"height":"100%","playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"subtitlesTextShadowColor":"#000000","subtitlesTextShadowVerticalLength":1,"progressBackgroundColorRatios":[0],"playbackBarHeadHeight":15,"progressRight":"33%","toolTipTextShadowColor":"#000000","playbackBarHeadShadowColor":"#000000","progressOpacity":0.7,"subtitlesFontSize":"3vmin","playbackBarHeadBackgroundColorRatios":[0,1],"surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderSize":0,"playbackBarBorderSize":0,"subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"toolTipFontFamily":"Arial","id":"MainViewer","toolTipPaddingLeft":6,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBorderColor":"#000000","toolTipPaddingRight":6,"playbackBarHeadShadow":true,"progressBorderColor":"#000000","subtitlesFontFamily":"Arial","toolTipShadowColor":"#333138","toolTipBackgroundColor":"#F6F6F6","playbackBarBackgroundOpacity":1,"playbackBarBottom":5,"surfaceReticleSelectionColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"toolTipFontColor":"#606060","progressBackgroundColor":["#000000"],"progressBottom":10,"toolTipFontSize":"1.11vmin","playbackBarHeight":10,"progressHeight":2,"playbackBarBackgroundColor":["#FFFFFF"],"vrPointerColor":"#FFFFFF","progressBarBorderRadius":2,"subtitlesBorderColor":"#FFFFFF","progressBorderSize":0,"progressBarBorderSize":0,"vrThumbstickRotationStep":20,"playbackBarProgressBorderSize":0,"playbackBarRight":0,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","progressBorderRadius":2,"toolTipPaddingTop":4,"playbackBarHeadShadowOpacity":0.7,"progressLeft":"33%","playbackBarProgressBackgroundColorRatios":[0],"subtitlesTextShadowOpacity":1,"playbackBarBorderColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","playbackBarProgressBorderColor":"#000000","propagateClick":false,"subtitlesFontColor":"#FFFFFF","playbackBarBorderRadius":0,"class":"ViewerArea"},{"class":"Model3DPlayer","viewerArea":"this.MainViewer","id":"MainViewerModel3DPlayer"},{"items":[{"player":"this.MainViewerModel3DPlayer","class":"Model3DPlayListItem","media":"this.model_020E33A7_13D8_669F_41A4_80EFE4E043D0","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerModel3DPlayer","class":"Model3DPlayListItem","media":"this.model_06F5BDD6_13E9_E2B1_41AF_89EF3C062003","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"}],"class":"PlayList","id":"mainPlayList"},{"sphericalHarmonicsMaxDegree":3,"environmentIntensity":0.5,"label":trans('model_020E33A7_13D8_669F_41A4_80EFE4E043D0.label'),"surfaceSelectionCoef":2,"thumbnailUrl":"media/model_020E33A7_13D8_669F_41A4_80EFE4E043D0_t.jpg","surfaceReticleMaxRadius":50,"antialiasingLevel":0.3,"surfaceReticleMinRadius":15,"objects":[],"data":{"label":"Ducatti03","showOnlyHotspotsLineSight":true,"showOnlyHotspotsLineSightInPanoramas":true,"keepModel3DLoadedWithoutLocation":true},"model":"this.res_0207B3A8_13D8_6691_41B0_D61DA43F26A1","camera":"this.cam_0238747A_13D8_6271_41A9_6581F79CD44F","backgroundColor":"#333333","surfaceReticleRadius":0.02,"lights":[],"class":"Model3D","id":"model_020E33A7_13D8_669F_41A4_80EFE4E043D0","floorRadius":17.34},{"class":"Model3DResource","id":"res_06F56DD6_13E9_E2B1_41A9_B31F934B70A3","levels":[{"url":"media/model_06F5BDD6_13E9_E2B1_41AF_89EF3C062003/scene.glb","class":"Model3DResourceLevel"},{"class":"Model3DResourceLevel","url":"media/model_06F5BDD6_13E9_E2B1_41AF_89EF3C062003/scene_mobile.glb","tags":"mobile"}]},{"maxDistance":30.49,"autoNearFar":true,"maxY":6,"minY":-6,"minDistance":3.81,"maxZ":27.84,"initialPitch":-30,"initialDistance":15.24,"minZ":-27.83,"minX":-24.71,"class":"OrbitModel3DCamera","maxX":24.72,"id":"cam_06B902F3_13E8_2677_41AB_5BB3BC408FE5","vrEnabled":true},{"class":"OrbitLight","pitch":45,"shadowTolerance":2,"id":"light_068132F3_13E8_2677_41B1_31F0733901DD","yaw":-45,"castShadow":true,"intensity":0.5},{"class":"OrbitLight","pitch":75,"shadowTolerance":2,"id":"light_068072F3_13E8_2677_4170_001EF8A847AF","yaw":135,"castShadow":true,"intensity":0.3},{"invertY":true,"invertX":true,"class":"Model3DResource","id":"res_0207B3A8_13D8_6691_41B0_D61DA43F26A1","levels":[{"url":"media/model_020E33A7_13D8_669F_41A4_80EFE4E043D0/scene.bin","class":"Model3DResourceLevel"}]},{"maxDistance":20.77,"initialY":2.38,"maxY":16.1,"far":20.769,"near":0.178,"vrEnabled":true,"minDistance":3.56,"maxZ":10.16,"initialPitch":-11.37,"initialDistance":10.38,"minZ":-10.36,"translationSpeed":0.356,"minX":-25.85,"initialYaw":-55.85,"class":"OrbitModel3DCamera","maxX":26.18,"initialX":0.16,"id":"cam_0238747A_13D8_6271_41A9_6581F79CD44F","minY":-11.34,"initialZ":-0.09}],"defaultMenu":["fullscreen","mute","rotation"],"minHeight":0,"scrollBarColor":"#000000","minWidth":0,"height":"100%","children":["this.MainViewer","this.Container_307FE49A_238B_BCCC_41BA_17CC35204F4D"],"width":"100%","watermark":false,"backgroundColor":["#CCCCCC"],"class":"Player","id":"rootPlayer","propagateClick":false,"scrollBarMargin":2};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.38, Sun Oct 26 2025