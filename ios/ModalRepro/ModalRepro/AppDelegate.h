//
//  AppDelegate.h
//  ModalRepro
//
//  Created by Laurence Hartgill on 05/09/2024.
//

#import <UIKit/UIKit.h>
#import <ReactNativeHost/ReactNativeHost.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate, RNXHostConfig>

@property (nonatomic, strong) ReactNativeHost *host;

@end

